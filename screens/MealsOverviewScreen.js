import { View,FlatList,StyleSheet } from "react-native";
import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Category from "../models/category";
function MealsOverviewScreen({route,navigation}){
    
 const catId = route.params.categoryId;
 const displayedMeals = MEALS.filter((mealItem)=>{ 
    return mealItem.categoryIds.indexOf(catId) >= 0;
 });
 useLayoutEffect(()=>{
    const catgoryTitle = CATEGORIES.find((Category)=> Category.id === catId).title;
 
    navigation.setOptions({
        title:catgoryTitle,
 });
 },[catId,navigation]);
 

 function renderMealItem(itemData){
const item = itemData.item;
const mealItemProps = {
    id:item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    affordability: item.affordability,
    complexity: item.complexity,
    duration: item.duration,
};

    return <MealItem {...mealItemProps}/>

 }
    return(
        <View style={styles.container}>
<FlatList data={displayedMeals} keyExtractor={(item)=> item.id} 
renderItem={renderMealItem}/>

        </View>
    );
}
export default MealsOverviewScreen;
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
});