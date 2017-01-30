import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Hozier from "../img/csseuxui-128.jpg"

class MonologueEngine extends React.Component{

   state = {
       zDepth: 1,
   };

   handleMouseEnter = () => {
     this.setState({
       zDepth: 5,
     });
   };

   handleMouseLeave = () => {
     this.setState({
       zDepth: 1,
     });
   };

   monologueEngine = (collection) => {
      var cards = collection.map((row, i) => {
         return (
               <Card key={i}
                  style={{margin: 20}}
                  zDepth={this.state.zDepth}
                  onMouseEnter={this.handleMouseEnter}
                  onMouseLeave={this.handleMouseLeave}>
                  {row.imgSrc &&
                     <CardHeader
                        title={row.cardHeaderTitle}
                        subtitle={row.cardHeaderSubtitle}
                        avatar={Hozier}
                        />}

                  {row.imgSrc && <CardMedia
                     style={{backgroundColor: row.backgroundColor}}
                     overlay={<CardTitle title={row.cardBodyTitle} subtitle={row.cardBodySubtitle} />}
                     >
                     <Avatar
                        icon={row.imgSrc}
                        backgroundColor={row.backgroundColor}
                        color={row.svgColor}
                        size={400}
                     />
                  </CardMedia>}

                  {!row.imgSrc && <CardTitle subtitle={`${row.cardBodyTitle} | ${row.cardBodySubtitle}`} />}

                  <CardText>
                     {row.CardText}
                  </CardText>
               </Card>
         )
      })

      return cards[0]
   }

   render(){
      return (
         this.monologueEngine(this.props.collection)
      )
   }
}

export default MonologueEngine
