# Searching4

A project made with the purpose to practice and study more about ReacJS. The first version was created by 4Front group for study during [NewTab](https://newtab.academy/) training.

### `LiveDemo`

[Live](http://searching4.s3-website-sa-east-1.amazonaws.com/)
### `About the project`

Our app consists in a web application where you can search for a tweet typing a word. For example, if you type "reactjs" you will get a list(array) of posts with this term in specific as result.

The home page will start the application searching a word pre configured at 'getInitialSearch'.

#### `Details`:
- isUserVerified = true - verified icon get primary(Material-Ui) color
- Button 'See More' refers to the original post not to the retweeted post

### `About API`

All data showed in our web app come from [Twitter API](https://developer.twitter.com/en/docs)

### `Download and run`

First, download the project

```
git clone https://github.com/pedrohrb7/Searching4.git
```

Access the project folder

```
cd Searching4
```

Now execute the comand below

```
npm install
```

And than

```
npm start
```

Now you should be able to access the home page [http://localhost:3000](http://localhost:3000)

### `Attention Points`

**You should create your own access key at Twitter Develop website**

After create your key copy and paste in the .env file

### `Team`

Who made this project ?

[Mirella De Giuli](https://github.com/mirelagiuli)

[Rafael Santos](https://github.com/rafael-rodrigues-santos)

[Pedro Borges](https://github.com/pedrohrb7/)

### `TODO`

- [x] Refactor layout

- [x] Refactor communication with Twitter API

- [x] Start home page searching something

- [x] Add link to the post

- [ ] Add link to the user profile

- [ ] Filter tweets by language

- [ ] Filter tweets with images or not

- [ ] Add pagination

- [ ] Format date in card header

- [ ] Add login with twitter account

- [ ] Choose the number of cards in home page

- [ ] Hide menu in mobile access

---

### `Tecs`

https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white

---

Feel free to text me to know more about or help to add new features

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
