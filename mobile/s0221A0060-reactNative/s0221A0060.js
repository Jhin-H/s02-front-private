import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Image as ReactImage } from 'react-native';
import {Dimensions} from "react-native";
import { TextInput } from 'react-native-gesture-handler';

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimension.get("window").height;


const s0221A0060 = () => {
  return (

      <Container>

        <View style={styles.wrap} >
        <View style={styles.inner}>


          <View style={styles.backBtn}>
            <ReactImage source={require('./assets/backBtnIcon.png')} style={styles.backBtnIcon} ></ReactImage>
          </View>
          

          <View style={styles.titleWrap}>
            <View style={styles.highlight}></View><Text style={styles.title}>비용작성</Text>
          </View>

          <View style={styles.form}>

            <View style={styles.inputWrap}>

              <View style={styles.label}>제목</View>

              <TextInput style={styles.input}></TextInput>

            </View>

            <View style={styles.inputWrap}>

              <View style={styles.label}>구분</View>

              <SelectBox style={styles.selectBox}></SelectBox>

            </View>

            <View style={styles.inputWrap}>

              <View style={styles.label}>사용일자</View>
              <View style={styles.searchBtn}>
                <ReactImage source={require('./assets/magnifying-glass.png')} style={styles.searchIcon}></ReactImage>
                </View>

              <TextInput style={styles.input}></TextInput>

            </View>

            <View style={styles.inputWrap}>

              <View style={styles.label}>사용금액</View>
              
              <TextInput style={styles.input}></TextInput>
              <View style={styles.won}>원</View>

            </View>

            <View style={styles.inputWrap}>
              <View style={styles.label}>첨부파일</View>
              <View style={styles.addBtn}>
                <ReactImage source={require('./assets/plus.png')} style={styles.addIcon} ></ReactImage>
              </View>

              <TextInput style={styles.input}></TextInput>

            </View>

            <View>
              <View style={styles.label}>사용내역</View>
              <TextInput
                style={styles.textfield}
                multiline = {true}
                numberOfLines = {4}/>

            </View>

          </View>





        </View>

        <View style={styles.btnWrap}>

          <View style={styles.requestBtn}>비용요청</View>
          <View style={styles.delBtn}>삭제</View>

        </View>



        </View>

  </Container>
  );
}

export default s0221A0060;




