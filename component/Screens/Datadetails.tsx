import React, { useState, useEffect } from "react";
import { FlatList, TextInput, View, Text, Image, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux"
import stylesmain from "../Stylesheets/stylesmain";
import { interdata } from "../Interface/Interface";
import { types } from "../types/types";
import LoadingIndicatator from "./LoadingIndicator";

const Datadetails = () => {

  const dispatch = useDispatch();
  const data = useSelector((state: interdata) => state.data);
  const loading = useSelector((state: interdata) => state.loading);
  const error = useSelector((state: interdata) => state.error);

  const [search, setsearch] = useState("");

  useEffect(() => {
    dispatch({ type: types.GET_DATA })
  }, [])

  if (loading) {
    return (
      <LoadingIndicatator />
    )
  }
  if (error) {
    console.log(error)
  }

  if (data != undefined) {
    const arr = data
    var data_filtered = arr.filter(item => item.country == (search))

  }

  const renderItem = ({ item }: any) => {
    return (
      <View style={stylesmain.container}>
        <Image style={stylesmain.Image} source={{ uri: item.logo }} />
        <Text style={stylesmain.name}>{item.name}</Text>
        <Text style={stylesmain.country}>{item.country}</Text>
      </View>
    )
  }

  if (data != undefined) {
    return (
      <View style={stylesmain.datalist}>
        <TextInput
          style={stylesmain.textinput}
          placeholder="Enter country"
          onChangeText={val => setsearch(val)}
        />

        <FlatList style={stylesmain.flatlist}
          data={data_filtered}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}
export default Datadetails;