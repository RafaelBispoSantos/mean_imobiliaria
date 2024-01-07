import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passoword: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAMFBMVEXFxcX////CwsL7+/vw8PDz8/Pr6+v29vbR0dHJycne3t7V1dXb29vo6Ojl5eW+vr5hrxtIAAADrklEQVR4nO2cCZLCIBBFQ5NEyHr/206i46hZFOjfjVPFKw/wqxegl1hVhUKhUCgUCoVCoVDQgWj5/VJRbjUnLLpc33dtYxeaehp656vvU0u+H2uzoWkH91VSiVxttypv2Kb/GqXkhsuxyl/GPrfEFaIPMlezjj6/Wd2JzzdSp7yxSq4NkblyyRmr1H/0+pNRu3xG7YLc/kebJ1KpmqJkLjRZlPrg8HxS6vSVpuhcUkpdKe3uyzCsVxY6pOlcM+p/6FyUKsqksOvohE4vTH3D0GmMWkJRx9JpaqUw5Tl+Rcn5NDJ1mouKSann6lye0homJV4m3VAwKXmATo0opaQ7fotClPqIt/IbBmmTEuPyfGYU1llVEM+v7z1hnSDPGyNd6zuQTjPJBin3mn9gZ1GhM8rzxggLhek0shUpUKjs5QS5P2+IPkwQL6c7rahQWNILF3kU3cUpQotQZaGgR95VqGjWw94kwkIrwgmVfT4Br1DZYmTmNkkeyL5HZ1AlYqSfebi0v8gKDRzUBSBdLzNbo39Y6So0frh0TCPdKqEe43vhInQF4nsrP8LF5H2t0SBF+F5jJs7vjCv1xsnxmxA60wZ+lKq08Bd84sD2jtWaiHGre4Uz9JeZ5fxGc2TPcL6a468wGs+DokzOtEl8HLJVOqRdULK157HSFJ3yU5sDpQmPfa2TfqM0ZuFtxSouabwqdVFvU6ub7y9K5zHc/S3lXMykPvDot13mXVeqgs6pKfdKLnk3BqSUbV1WpeS7s23xndQ6n+/JT1Hn0yWT/33kPq65ZpS2SqI4az6sqntIBZ9Ke2rN7XHPqphHLf9Tz+zq6Hw+krAsvkfhOwdyzFr5Ri1dOEU/7c4Q/iIDORATtSlwXG9MJ6cTOLJdmf6JTjGlcJ0ySpHrJA/w5R5yUv8MunEipROtlL96fwq2uefFdII/HAIMQs7B9aNkEv4BKvWRF/wxoDCFrTWfgpmPIZeyzkDMSeRO0GcApylq5eE9/D0D6Yy/w8588Yy/w9wxQcy8w2C290EbJAFY3jcZuMWxj3D2SZFL4p9hFNCzytF0p0legtM1KMekihG6khylgC2XKJK/GlN4jbySWj0rG3QxaZJM7VRaSUqn1H954JCysidYIZ+TVDsrve9eSWhFctfF0kj4M4Mcnk9afVYplfZEb0nkyPmV6LyX7Da9I7YTJd8dOSPygNLoOhwT24vIFKJLkMbphKyGJ2GjZOYL0cgg1eqPHBHVM9HrO+w56UT8AKdLM5c3Ker7AAAAAElFTkSuQmCC"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
