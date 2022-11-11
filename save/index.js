// Getting all the necessary imports.
require("dotenv").config();
const functions = require("firebase-functions");
const firebaseAdmin = require("firebase-admin");
const corsLib = require("cors");

// Initializing any imports needed pre-function.
const admin = firebaseAdmin.initializeApp();
const cors = corsLib({ origin: "*" });



// Simply check if an onchain transaction exists between user and address stated.
exports.votingSystem = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    console.log("works")
    // Simple function to delay the code wherever needed.
    const body = JSON.parse(request.body);
    console.log(body)
    // request.body.map((item) => console.log(item));
    console.log(body.userID, body.CompanyID,typeof body.votePoint)
    const _firestore = firebaseAdmin.firestore.FieldValue;
    try {
      // substract points from user and add to company 
      const userPoints = admin
        .firestore()
        .collection("users")
        .doc(body.userID)
        .collection("points")
        .doc("points");
      const companyPoints = admin
        .firestore()
        .collection("companies")
        .doc(body.CompanyID)
        .collection("points")
        .doc("points");
      const userPointsData = await userPoints.get();
      const companyPointsData = await companyPoints.get();
      const userPointsDataPoints = userPointsData.data().points;
      const companyPointsDataPoints = companyPointsData.data().points;

      console.log(userPointsDataPoints);
      console.log(parseInt(companyPointsDataPoints , 10 ));
      const userPointsDataPointsSubstracted = userPointsDataPoints - body.votePoint;
      const companyPointsDataPointsAdded = parseInt(companyPointsDataPoints , 10 ) + body.votePoint;
      console.log(userPointsDataPointsSubstracted);
      console.log(companyPointsDataPointsAdded);

      await userPoints.update({
        points: userPointsDataPointsSubstracted,
        timestamp: _firestore.serverTimestamp(),
      });
      await companyPoints.update({
        points: companyPointsDataPointsAdded,
        timestamp: _firestore.serverTimestamp(),
      });
      response.send("Voted");

      const userPointLog = admin
        .firestore()
        .collection("users")
        .doc(body.userID)
        .collection("points")
        .doc("points")
        
      await userPointLog.collection("logs").add({
        points: body.votePoint * -1,
        timestamp: _firestore.serverTimestamp(),
        awardedFor: { type: "contribution", id: body.CompanyID },
        title: body.CompanyName,
        url: `https://pyme.id/${body.CompanyID}`,
      });
      const companyPointLog = admin
        .firestore()
        .collection("companies")
        .doc(body.CompanyID)
        .collection("points")
        .doc("points")
     
      await companyPointLog.collection("logs").add({
        uid : body.userID,
        points: body.votePoint,
        timestamp: _firestore.serverTimestamp(),
        type: "contribution",
      });

    } catch (error) {
      console.log(error);
      response.send(error);
    }
  });
});

//Check if users has already been given points for this bounty
// const pointsGiven = admin
//   .firestore()
//   .collection("users")
//   .doc("0X669ABB8538A92FB29619413C5AC3E23A8C8D8355")
//   .collection("points")
//   .doc("points");
// const points = await pointsGiven.get();
// const pointsData = points.data().points;
// console.log(pointsData);
// if point collection exsists in company collection add points else create collection and add points
//       const companiesPoints = admin
//         .firestore()
//         .collection("companies")
//         .doc("nftscan")
//         .collection("points")
//         .doc("points");
//       const companyPoints = await companiesPoints.get();
//       if (companyPoints.exists) {
//         const companyPointsData = companyPoints.data().points;
//         console.log(companyPointsData);
//         const newPoints = companyPointsData + 0;
//         console.log(newPoints);
//         await companiesPoints.update({
//           points: newPoints,
//           lastUpdated: _firestore.serverTimestamp(),
//         });
//       } else {
//         await companiesPoints.set({
//           points: 0,
//           lastUpdated: _firestore.serverTimestamp(),
//         });
//       }
//       //Get bounty data
//     } catch (err) {
//       console.log(err);
//       return null;
//     }
//   });
//   response.send("First cloud function");
// });
