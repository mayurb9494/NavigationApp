import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGriedTile';
import {CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }){
    function renderCategoryItem(itemData){

        function onPressHandler(){
    
            navigation.navigate('MealsOverview',{
                categoryId:itemData.item.id
            });

        }
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}/>;
    }
    return <FlatList style={{backgroundColor:'#3f2f25'}} data={CATEGORIES} keyExtractor={(item)=> item.id} renderItem={renderCategoryItem}
    numColumns={2}/>
}

export default CategoriesScreen;