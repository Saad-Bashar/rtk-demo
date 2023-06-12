import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.configure({
  name: "rtk-tuto",
})
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
  })
  .use(reactotronRedux())
  .connect();

export default reactotron;
