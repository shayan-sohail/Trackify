import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from '@react-navigation/elements';
import { NavigationContainer } from '@react-navigation/native';
const RightDrawerContext = React.createContext();
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../constants/colors';
import IconButton from '../../components/Buttons/IconButton';
const ICON_SIZE = 25;
function HomeScreen() {
  const navigation = useNavigation();
  const { openRightDrawer } = React.useContext(RightDrawerContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.topBar}>
        <IconButton
          iconName="menu"
          size={ICON_SIZE}
          color= {Colors.veryLight}
          style={styles.iconButton}
          onPress={(state) => openRightDrawer()}
        />

        <View style={styles.rightIcons}>
          <IconButton
            iconName="magnify"
            size={ICON_SIZE}
            color= {Colors.veryLight}
            style={styles.iconButton}
            onPress={(state) => openRightDrawer()}
          />
          <IconButton
            iconName="account-circle"
            size={ICON_SIZE}
            color= {Colors.veryLight}
            style={styles.iconButton}
            onPress={(state) => openRightDrawer()}
          />
        </View>
      </View>
      <Button onPress={() => openRightDrawer()}>Open right drawer</Button>
    </View>
  );
}

const LeftDrawer = createDrawerNavigator();
const Stack = createStackNavigator();

const LeftDrawerScreen = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
  );
};

function RightDrawerScreen() {
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({
      openRightDrawer: () => setRightDrawerOpen(true),
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
      renderDrawerContent={() => <>{/* Right drawer content */}</>}
    >
      <RightDrawerContext.Provider value={value}>
        <LeftDrawerScreen />
      </RightDrawerContext.Provider>
    </Drawer>
  );
}

export default function App() {
  return (
      <RightDrawerScreen />
  );
}

const styles = StyleSheet.create({
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  category: {
    fontSize: 12,
    color: Colors.medium,
  },
  circleIcon: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  date: {
    fontSize: 12,
    color: Colors.medium,
  },
  expense: {
    color: 'red',
  },
  expenseBox: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    flex: 1,
    marginLeft: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  expenseText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.veryLight,
  },
  headerPadding: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: Colors.veryLight,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  ieTextContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    marginRight: 20,
  },
  income: {
    color: 'green',
  },
  incomeBox: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    flex: 1,
    marginRight: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  incomeText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.veryLight,
  },
  incomeExpenseRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    color: Colors.veryLight,
  },
  listContainer: {
    backgroundColor: Colors.veryLight,
    paddingBottom: 20,
  },
  midContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  recentTransactions: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.dark,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: Colors.dark,
    marginBottom: 3,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
  topSection: {
    backgroundColor: Colors.highlight,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  totalBalanceLabel: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
    marginTop: 50,
  },
  totalBalanceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    backgroundColor: Colors.veryLight,
  },
  viewAll: {
    fontSize: 14,
    color: Colors.highlight,
    fontWeight: '500',
  },
});