# b2bit Challenge

## Description
This is a project that was proposed as a challenge for the b2bit selection process. Here it simulates a web system that uses http methods so the user, previously registered in the system, can be authenticated and have access to their profile.

web application deploy: [[Click here]](https://hudsonthiago.github.io/b2bitChallenge/)
## Technologies

- [Node (v18.17.0)](https://nodejs.org/en)
- [Vite (React v18.2.0)](https://vitejs.dev/)

#### Extensions 
- [tailwindCSS (v3.4.3)](https://tailwindcss.com/)
- [axios (v1.6.8)](https://axios-http.com/ptbr/docs/intro)
- [react router dom (v6.23.1)](https://reactrouter.com/en/main)

## How to run

```
 git clone https://github.com/HudsonThiago/b2bitChallenge.git

 cd b2bitChallenge

 npm install

 npm run dev
```

## How to use
First, you will be directed to the route.
```
http://localhost:5173/b2bitChallenge
```

There will be a login form. To access the dashboard page, simply enter the following credentials:

```
login: cliente@youdrive.com
password: password
```
After you enter the data you will be authenticated and redirected to the dashboard page. If the user tries to enter the login page again, they will be redirected to the dashboard screen. The user will only exit if they press the "logout" button.