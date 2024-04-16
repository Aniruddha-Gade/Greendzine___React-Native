import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { employeeListData } from '../../constants/employee';


const EmployeeItem = ({ employee }) => (
  <View
    className='bg-[#0F2323] my-3 text-orange-700 w-[360px] h-[256px] flex justify-around p-5 rounded-3xl relative'
  >
    {/* employee serial number */}
    <View className='absolute right-3 top-3 '>
      <Text className='text-white flex items-center justify-center text-center border-2 border-black p-2 w-9 h-9 rounded-full'>
        {employee.empId}
      </Text>
    </View>

    <View className='flex flex-row gap-x-6 '>
      <Text className='text-gray-400 text-base'>EMP ID</Text>
      <Text className='text-white text-base'>: </Text>
      <Text className='text-white font-bold text-base'>{employee.empId}</Text>
    </View>
    <View className='flex flex-row gap-x-6 '>
      <Text className='text-gray-400 text-base'>Name</Text>
      <Text className='text-white text-base'>: </Text>
      <Text className='text-white font-bold text-base'>{employee.name}</Text>
    </View>
    <View className='flex flex-row gap-x-6 '>
      <Text className='text-gray-400 text-base'>DOB</Text>
      <Text className='text-white text-base'>: </Text>
      <Text className='text-orange-400 font-bold text-base'>{employee.dob}</Text>
    </View>
    <View className='flex flex-row gap-x-6 '>
      <Text className='text-gray-400 text-base'>Role</Text>
      <Text className='text-white text-base'>: </Text>
      <Text className='text-primary font-bold text-base'>{employee.role}</Text>
    </View>

  </View>
);

const EmployeeListView = () => {



  return (

    <View
      style={{ color: '#fff' }}
      className='bg-black-300 h-full text-red-500 flex items-center justify-center bg-sky-60'>
      <Text className='text-3xl  '>employeeListView</Text>

      <FlatList
        data={employeeListData}
        className=''
        contentContainerStyle='flex items-center justify-center w-full'
        renderItem={({ item }) => <EmployeeItem employee={item} />}
        keyExtractor={(item) => item.empId.toString()}
      />

    </View>
  )
}

export default EmployeeListView