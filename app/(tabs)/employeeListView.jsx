import { FlatList, Text, View, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { employeeListData } from '../../constants/employee';

import searchIcon from '../../assets/icons/search.png'
import logo from '../../assets/logo/logo2.png'
import profile from '../../assets/icons/profile2.png'

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

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployeeList, setFilteredEmployeeList] = useState(employeeListData);

  // handle search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredEmployeeList(employeeListData);
    } else {
      const filteredList = employeeListData.filter((employee) =>
        employee.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredEmployeeList(filteredList);
    }
  };



  return (

    <View
      style={{ color: '#fff' }}
      className='bg-black-300 h-full p-5 flex items-center justify-center '>

      {/* profile icon */}
      {/* <View className='flex w-full items-end mt-4'>
        <Image
          source={profile}
          resizeMode="contain"
          className="w-[40px] h-[40px]"
          alt='profile icon'
        />
      </View> */}

      {/* company icon */}
      {/* <View className='relative '>
        <View className='absolute -right-5 -top-5 '>
          <Text className='text-primary bg-[#5E5E5EB5] flex items-center justify-center text-center border-2 border-black p-2 w-9 h-9 rounded-full'>
            4
          </Text>
        </View>

        <Image
          source={logo}
          resizeMode="contain"
          className="w-[71px] h-[70px] ml-2"
          alt='search icon'
        />
      </View> */}

      {/* <View className='p-2 my-4 flex flex-row items-center justify-between bg-[#0F2323] h-[55px] border-2 border-[#595959] rounded-xl'>
        <TextInput
          className='text-white p-2 text-[16px] w-[298px] h-full my-14 bg-[#0F2323]'
          placeholder="Search with name"
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor="#fff"
        />
        <Image
          source={searchIcon}
          resizeMode="contain"
          className="w-[30px] h-[30px] ml-2 text-white"
          alt='search icon'
        />
      </View> */}


      <FlatList
        data={filteredEmployeeList}
        renderItem={({ item }) => <EmployeeItem employee={item} />}
        keyExtractor={(item) => item.empId.toString()}
      />

    </View>
  )
}

export default EmployeeListView