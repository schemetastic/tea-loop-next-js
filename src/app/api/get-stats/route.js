import { NextResponse } from "next/server";

export async function GET(req){
  const token = await getToken();
  const results = await getResults(token);
  
  if (token == "error" || results == "error") {
    return NextResponse.json(JSON.stringify({message: "There was a problem trying to connect to DevCycle"}), { status: 500 });
  }

  return NextResponse.json(results);
}


async function getToken() {
  const token = await fetch("https://auth.devcycle.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      audience: "https://api.devcycle.com/",
      client_id: process.env.DEVCYCLE_CLIENT_ID,
      client_secret: process.env.DEVCYCLE_CLIENT_SECRET
    })
  }).then(response => response.json())
    .then(data => data.access_token)
    .catch(error => {console.log(error); return "error"});

  return token
}


// Get data

async function getResults(token) {
  if (token == "error") return "error";
  let hasError = false;

  const urlParams = new URLSearchParams({
    feature: "tea-loop-header-flavor",
    startDate: "2024-12-20T06:55:57.263Z",
    endDate: getTodayDateISOFormat()
  });
  const apiUrl = `https://api.devcycle.com/v1/projects/schemetastic/metrics/preferred-header-flavor/results?${urlParams.toString()}`;

  const results = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        return "error"
      }
      return response.json();
    })
    .then(data => {
      return data.result.variations
    })
    .catch(error => {console.log(error); return "error"});

  return results;
}

function getTodayDateISOFormat() {
  let todayDate = new Date();
  return todayDate.toISOString();
}