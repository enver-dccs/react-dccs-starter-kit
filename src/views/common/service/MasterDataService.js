import * as firebase from "firebase";
import 'firebase/database';

class MasterDataService {

  fetchData(dataType, callback) {
    firebase
        .database()
        .ref(dataType + '/')
        .once('value')
        .then((snap) => callback(snap.val()));
  }
}

export default new MasterDataService();
