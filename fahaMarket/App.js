import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./redux/store";
import "react-native-gesture-handler";
import { SafeAreaView } from 'react-native';
import Navigation from "./src/Navigation"
const App = () => {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style = {{flex:1}}>
            <Navigation/>
          </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;