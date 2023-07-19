import { useContext, useLayoutEffect } from "react";
import { Text ,StyleSheet,View,Image,ScrollView, Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import  FavoritesContext  from "../store/context/Favorites-context";
function MealDetailScreen({route,navigation}){

    const favoritesMealCtx = useContext(FavoritesContext) ;

const mealId = route.params.mealId;

const  selectedMeal = MEALS.find((meal)=> meal.id === mealId);

const mealIsFavorite = favoritesMealCtx.ids.includes(mealId);

function changeFavoritesHandler(){
if(mealIsFavorite){
    favoritesMealCtx.removeFavorite(mealId);
}else{
    favoritesMealCtx.addFavorites(mealId);
}
    console.log('Pressedd');
}
useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>{
            return <IconButton icon= { mealIsFavorite ? "star" : 'star-outline'}
            color="white"
            onPress={changeFavoritesHandler}/>
        },
    })
},[navigation,headerButtonPressHandler]);

    return(
   <ScrollView style={styles.rootContainer}>
    <Image source={{uri: selectedMeal.imageUrl}} style = {styles.image} />
    <Text style={styles.title}> {selectedMeal.title}</Text>
    <MealDetails textStyle={styles.detailText} affordability={selectedMeal.affordability} duration={selectedMeal.duration} complexity={selectedMeal.complexity}/>
<View style={styles.listOuterContainer}>
<View style={styles.listContainer}>
<Subtitle>Ingradients</Subtitle>
<List data={selectedMeal.ingredients}/>

<Subtitle>Steps</Subtitle>
<List data={selectedMeal.steps}></List>
</View>
</View>
   </ScrollView>

);
}
export default MealDetailScreen;
const styles=StyleSheet.create({
    rootContainer:{
        marginBottom:32,
    },
image:{
width:'100%',
height:300,
},
title:{
    fontWeight:'bold',
    fontSize:24,
    margin:8,
    textAlign:'center',
    color:'white'

},
detailText:{
    color:'white',
},
subtitle:{
    color: '#e2b497',
    fontSize:18,
    fontWeight:'bold',
   
   textAlign:'center',
  

},
subtitleContainer:{
  
    padding:6,
    marginHorizontal:24,
    marginVertical:4,
    borderBottomColor:'#e2b497',
    borderBottomWidth:2,
},
listContainer:{
    width:'80%',

},
listOuterContainer:{
    alignItems:'center',
}
    
});