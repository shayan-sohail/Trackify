import * as React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import Colors from '../constants/colors';
import HomeScreen from './HomeScreen';
import CustomDrawer from './CustomDrawer';

export const RightDrawerContext = React.createContext(); // Add export

const TestScreen = () => {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({
        openRightDrawer: () => {
            console.log('Opening drawer from TestScreen');
            setRightDrawerOpen(true);
          },
      closeRightDrawer: () => setRightDrawerOpen(false),
    }),
    []
  );

  return (
    <Drawer
      open={rightDrawerOpen}
      onOpen={() => setRightDrawerOpen(true)}
      onClose={() => setRightDrawerOpen(false)}
      drawerPosition="left"
      drawerStyle={{ marginTop:0, width: '60%' }}
      renderDrawerContent={() => <CustomDrawer  />}
    >
      <RightDrawerContext.Provider value={value}>
        <HomeScreen/>
      </RightDrawerContext.Provider>
    </Drawer>
  );
}

export default TestScreen;

const styles = StyleSheet.create({

  iconButton: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  rightIcons: {
    flexDirection: 'row',
  },
  topBar: {
    height: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.highlight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: '100%',
    zIndex: 1,
  },
});