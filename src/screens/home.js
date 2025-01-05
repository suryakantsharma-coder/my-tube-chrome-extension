
import Header from "../components/home/header";
import KeyWords from "../components/home/Keywords";
import SettingItem from "./setting";
import useHomeHook from "../hooks/useHomeHook";

const Home = ({setScreen}) => {
   const {setting,isStartOption, isActive, handleExtensionState, handleSettingState, clearSettingState, handleRemoveItem} = useHomeHook();

    return (
        <div style={{
            width : '100%',
            height : 550,
            backgroundColor : "#0f0f0f",
            display : 'flex',
            flexDirection : "column",
        }}>
        <Header />

        <div style={{
        width : "100%",
        height : "550px",
        justifyContent : "center",
        alignItems : 'center',
      }}>
        {
          isStartOption?.map((item, index) => {
            const itemState = {
               name : "My Tube Active",
          description : "Activate this extension.",
          type : 'switch',
          action : (!isActive) ? false : true
            }
            return (
              <SettingItem key={index} item={itemState} onStateChange={handleExtensionState} onSwitchOff={handleRemoveItem} isExtenstionActiveBtn={true} />
            )
          })
        }
      </div>
        <div style={{
        width : "100%",
        height : "550px",
        justifyContent : "center",
        alignItems : 'center',
        opacity : (isActive) ? 1 : 0.2
      }}
      >
        {
          setting?.map((item, index) => {
            return (
              <SettingItem isExtensionActive={isActive} key={index} item={item} handleSettingChange={handleSettingState} onItemClick={() => {
                if (item?.name?.toString()?.toLowerCase() == "clear settings") 
                  clearSettingState();
                else if (item?.name?.toString()?.toLowerCase() == "keywords settings" && setting[index - 1].action)
                 setScreen("keywords");
              }} 
              isKeywordsEnable={(item?.name?.toString()?.toLowerCase() == "keywords settings" && setting[index - 1].action) ? true : false}
              onSwitchOff={handleRemoveItem}
              />
            )
          })
        }
      </div>
        
        <KeyWords />
       {/* <ActiveSwitch /> */}
        </div>
    )
}

export default Home;