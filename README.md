# Tea Loop

This is a demo site app using [Next.js](https://nextjs.org/) and [DevCycle](https://www.devcycle.com/)

Preview the project here: [https://tea-loop-next-js.vercel.app/](https://tea-loop-next-js.vercel.app/)

## Setting up Tea Loop

1. After cloning this repository in your machine, rename the file `.sample.env` to `.env` and then add your respective DevCycle Keys.
2. Install the dependencies

```bash
npm install
```

3. Go to DevCycle and create an Experiment feature that returns a string value, the key string to the feature should be `tea-loop-header-flavor`, the feature variants should look like this:

|  #  |    Variable     |       key       |
| :-: | :-------------: | :-------------: |
|  1  | Honey Lavender  | honey-lavender  |
|  2  | Raspberry Mint  | raspberry-mint  |
|  3  |      Peach      |      peach      |
|  4  |   Pomegranate   |   pomegranate   |
|  5  | Rose & Lavender |  rose-lavender  |
|  6  | Black Tea Lemon | black-tea-lemon |

**Important: The key strings should be identical**

4. For the targeting (in the "Development" section), make sure that is _ON_ and should be configured as:

-   Name: Testing Group
-   Definition: All Users
-   Serve: Random Distribution

Distribution should be as follows:
Variant | distribution
:-:|:-:
Honey Lavender | 16.67%
Raspberry Mint | 16.67%
Peach | 16.67%
Pomegranate | 16.67%
Rose & Lavender | 16.67%
Black Tea Lemon | 16.65%

-   Schedule: none
-   Randomize Using: User ID

5. Go to the "Experiment Results" section and then create a new Metric, make sure that the key of the metric be `preferred-header-flavor`, and that the event key be named `header-flavor-cta-clicked`, the Type of the metric should be "Total Sum", and optimized for "Increase"

6. Now that you are all set-up, go to the root directory of the project and hit:

```bash
npm run dev
```

7. Go to `http://localhost:3000/`
