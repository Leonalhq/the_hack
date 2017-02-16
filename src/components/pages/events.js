import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../utility/playground"
import Build from 'material-ui/svg-icons/device/widgets';
import Code from 'material-ui/svg-icons/maps/layers';
import {redA200, grey600} from 'material-ui/styles/colors';
import CardEngine from "../automation/cardEngine"

class EventsPage extends React.Component{

   datastore = () => {
      const powderedBlue = '#eff3ff'
      const array = [
         {
            cardHeaderTitle:"P. William Hozier",
            cardHeaderSubtitle:"Janurary 22, 2017",
            cardBodyTitle:"Friend Us On Facebook!",
            cardBodySubtitle:"UMass Bike Coop",
            backgroundColor:"#ffffff",
            svgColor:powderedBlue,
            imgSrc:<img src='http://findicons.com/files/icons/1678/handy_social_media_icons/256/facebook.png'/>,
         CardText:'For our most up-to-date events, follows UMass Bike Coop on Facebook. Thanks!'
         }
      ]
      return array
   }

   data = this.datastore()

   render(){
      return (
         <div>
            <Playground
               payload={
                  <div>
                     <h2 style={{fontWeight: '100', lineHeight: '50px' }}>Events</h2>
                     {this.data.map((row, i) => {
                           return <CardEngine key={i} collection={[row]}></CardEngine>
                     })}
                  </div>
               }
               maxWidth={900}
               />
         </div>
      )
   }
};


export default withWidth()(EventsPage);
