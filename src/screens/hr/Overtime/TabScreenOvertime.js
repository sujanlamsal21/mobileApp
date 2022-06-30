import React,{useEffect,useState} from "react";
import {
    DataTable,
    TextInput as TI,
  } from 'react-native-paper';
  import {Button, CircleIcon, ScrollView} from 'native-base';
  import { SwipeListView } from 'react-native-swipe-list-view';
  import {styles} from "../../../styles/overtimeStyle";
import {Text} from "react-native";

export default function TabScreen(props) 
{
    const VisibleItem =props =>{
        const {data,index} = props;
        return (
          <View style={styles.rowFront}>
          <TouchableHighlight style={styles.rowFrontVisible}>
            <View>
              <DataTable.Row key={data.index}>
                          <DataTable.Cell>{data.item.date}</DataTable.Cell>
                          <DataTable.Cell>{TimeinModulation(data.item.from_time)}</DataTable.Cell>
                          <DataTable.Cell>{TimeinModulation(data.item.to_time)}</DataTable.Cell>
                          <DataTable.Cell>{data.item.status}</DataTable.Cell>
              </DataTable.Row>
            </View>
          </TouchableHighlight>
          </View>
        )
       }
      const renderItem=(data, rowMap)=>{
          return (
            <VisibleItem data={data} index={rowMap}/>
          )
      }
    
      const editRow=(rowMap, data)=>{
    
      }
    
      const deleteRow=(rowMap, data)=>{
    
      }
    
      const HiddenItemWithAction=props=>{
        const {onEdit, setOnEdit}= props;
    
        return (
          <View style={styles.rowBack}>
            <TouchableHighlight style={[styles.backRightBtn, styles.backRightBtnLeft]}>
              <Text>Edit</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.backRightBtnRight}>
              <Text>Delete</Text>
            </TouchableHighlight>
          </View>
        )
      }
      const renderHiddenItem=(data, rowMap)=>{
                   return (
                    <HiddenItemWithAction 
                      data={data}
                      rowMap={rowMap}
                      onEdit={()=>editRow(rowMap, data)}
                      onDelete={()=>deleteRow(rowMap, data)}
                      />
                   )
      }
    const optionsPerPage = [2, 3, 4];
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

    useEffect(() => {
      setPage(0);
    }, [itemsPerPage])
    return (
        <>
        <DataTable style={{flex:3}}>
          <DataTable.Header>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title>From</DataTable.Title>
            <DataTable.Title>To</DataTable.Title>
            <DataTable.Title>Status</DataTable.Title>
          </DataTable.Header>
          {/* <ScrollView>
            <SwipeListView
              data= {props.data}
              renderItem={renderItem}
              renderHiddenItem={renderHiddenItem}
              leftOpenValue={-105}
              rightOpenValue={5}
              // disableRightSwipe
            />
<DataTable.Body>
          </ScrollView> */}
          <ScrollView>
     <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>
      </ScrollView>
      {
             <Button style={{ backgroundColor: '#4A90C3',height:50,
              width: 100,alignSelf:"center", float: 'left',
              marginRight:4,marginBottom:5, borderRadius:50 }}
               onPress={props.viewOvertimeForm}>
             <Text style={{ color: 'white' }}>+Add</Text>
            </Button>
          }
        </DataTable>
        </>
    );
  }