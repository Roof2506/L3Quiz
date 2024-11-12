import React,{useState} from 'react';
import {View, Text, Button, Alert,Image,ScrollView ,ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Question = ({question,picture,name1,name2,name3,onValueChange})=> {
    return (
        <View>
            <Text>
                {question} What animal is this?
            </Text>
            <Image source={picture} style={{width:300, height:300}}/>
            <Text>
                Answer:
            </Text>
            <RNPickerSelect
                onValueChange={onValueChange}
                items={[
                    { label: name1, value: name1 },
                    { label: name2, value: name2 },
                    { label: name3, value: name3 },
                ]}
            />
        </View>
    );
};

const MyApp = () => {
    const[Ans1,setAns1] = useState('');
    const[Ans2,setAns2] = useState('');
    const[Ans3,setAns3] = useState('');
    const[Ans4,setAns4] = useState('');
    const [points, setPoints] = useState(0);
  return(
      <ScrollView>
      <View style={{padding:60}}>
         <Icon name="cow" size={50} color="#B23B23"/>
         <Text style={{fontSize:20}}>Animal Quiz?</Text>
          <Question  question={1} picture={require('./Images/cow.jpg')} name1="Cow" name2="Buffalo" name3="Bull" onValueChange={(value) => setAns1(value)}/>
          <Question  question={1} picture={require('./Images/Chicken.jpg')} name1="Bird" name2="Emu" name3="Chicken" onValueChange={(value) => setAns2(value)}/>
          <Question  question={1} picture={require('./Images/Unicorn.jpg')} name1="Horse" name2="Unicorn" name3="Centuar" onValueChange={(value) => setAns3(value)}/>
          <Question  question={1} picture={require('./Images/Godzilla.jpg')} name1="Giant Lizard" name2="Godzilla" name3="Dragon" onValueChange={(value) => setAns4(value)}/>
          <Button
               onPress={() => {
                   let newPoints = 0;
                   if (Ans1 === 'Cow') newPoints++;
                   if (Ans2 === 'Chicken') newPoints++;
                   if (Ans3 === 'Unicorn') newPoints++;
                   if (Ans4 === 'Godzilla') newPoints++;
                   setPoints(newPoints);
                   Alert.alert('Your Score', `You scored ${newPoints} out of 4.`);
               }}
              title="Submit"
          />
      </View>
      </ScrollView>
  )
}

export default MyApp;
