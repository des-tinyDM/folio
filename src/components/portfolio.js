import grlogo from "../images/portfolio/heroImage.png";
import grdash from "../images/portfolio/grdash.png";
import gittab from "../images/portfolio/gittab.jpeg";
import tabtrackerfull from "../images/portfolio/tabtrackerfull.png";
import qode from "../images/portfolio/qode.png";
import qodetest from "../images/portfolio/qodetest.png";

import dogleticslogo from "../images/portfolio/dogleticslogo.png";

const portfolio = [
  {
    name: "Grassroots",
    one: grlogo,
    two: grlogo,
    fulldisplay: grdash,
    hosted: "http://grassroots-app-demo.com",
    github: "https://github.com/des-tinyDM/grassrts",
    description:
      "During my time spent organizing people, I realized that the tools that enabled us to do so were hard on the eye and confusing to use. Grassroots was born. Combining d3's powerful data visualization library with a powerful Postgres database, campaigns have never been easier to run.",
    technology:
      "React | Redux | Node | Express | d3 | Auth0 | Postgresql | Scss"
  },
  {
    name: "Gittab",
    one: gittab,
    two: gittab,
    github: "https://github.com/des-tinyDM/gittab",
    fulldisplay: tabtrackerfull,
    description:
      "There are a ton of sites out there with guitar tabs, but none of them offer a solution for storing your favorite ones! Gittab allows users to store their favorite tabs and to view information about the song. My full CRUD introduction to Vue and Vuex.",
    technology: "Vue | Vuex | Vuetify | Node | Sqlite | JWT | Webpack"
  },
  {
    name: "Qode",
    one: qode,
    two: qode,
    fulldisplay: qodetest,
    description:
      "Qode was built for DevMountain's group capstone project. It was developed to be a crash-course introduction for beginners to code, who aren't satisified with other free options. Qode was developed using React; most of the app takes advantage of React's component-based architecure and uses extremely reusable higher-order components to render content to the screen. The backend is run using Express and connects to a PostgreSQL database.",
    technology:
      "React | Redux | Node | Express | bCrypt | Postgresql | Styled-Components"
  },
  {
    name: "Dogletics",
    one: dogleticslogo,
    two: dogleticslogo,
    description:
      "Active dog owners and their furry companions can find equipment to popular dog sports in this web shop demo that uses Stripe integration to handle payments. Users can learn more about each dog sport or search for equipent based on the selected sport."
  }
];

export default portfolio;
