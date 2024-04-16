import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

// logo
import logo from '../../assets/logo/logo2.png'
import profile from '.././../assets/icons/profile2.png'

const ProductivityDay = ({ day, productivityRate }) => {
  // Assuming each productivity point corresponds to 2 units of width
  const greenLineWidth = Number(productivityRate * 2);
  // console.log("greenLineWidth = ",greenLineWidth)

  return (
    <View className='flex gap-5 my-2'>
      <View className='flex flex-row items-center justify-between'>
        <View className='flex-row gap-1 '>
          <Text className='text-white text-[14px]'>Productivity on</Text>
          <Text className='text-white text-[14px]'>{day}</Text>
        </View>
        <Text className='text-white text-[14px]'>{productivityRate}%</Text>
      </View>
      {/* greenLine for productivity Rate*/}
      <View
        style={{ width: greenLineWidth }}
        className={`bg-[#36A54680] border border-[#36A546] h-[11px] rounded-3xl `}
      >
      </View>
    </View>
  )
}

const Dashboard = () => {
  return (
    <ScrollView className="bg-black-300 h-full">

      <View
        style={{ color: '#fff' }}
        className='bg-black-30 h-full p-5'>

        {/* profile icon */}
        <View className='flex w-full items-end mt-4'>
          <Image
            source={profile}
            resizeMode="contain"
            className="w-[51px] h-[50px] ml-2"
            alt='profile icon'
          />
        </View>

        {/* company icon */}
        <View className='relative w-full inline-flex items-center justify-center'>
          <View className='absolute -top-3 right-[115px] '>
            <Text className='text-primary bg-[#5E5E5EB5] flex items-center justify-center text-center border-2 border-black p-2 w-9 h-9 rounded-full'>
              4
            </Text>
          </View>

          <Image
            source={logo}
            resizeMode="contain"
            className="w-[71px] h-[70px] ml-2"
            alt='company logo'
          />
        </View>

        <View className='mt-4'>
          <View className='bg-[#1A2C2C99] rounded-3xl font-bold'>
            <Text className='text-[18px] text-white  p-5'>
              Employee Productivity Dashboard
            </Text>
          </View>

          {/* all productivity days rate */}
          <View className='bg-[#1A2C2C99] p-4 w-full rounded-3xl my-3'>
            <ProductivityDay day={'Monday'} productivityRate={4} />
            <ProductivityDay day={'Tuesday'} productivityRate={92} />
            <ProductivityDay day={'Wednesday'} productivityRate={122} />
            <ProductivityDay day={'Thursday'} productivityRate={89} />
            <ProductivityDay day={'Friday'} productivityRate={98} />
            <ProductivityDay day={'Saturday'} productivityRate={34} />
            <ProductivityDay day={'Sunday'} productivityRate={45} />
          </View>

        </View>


      </View>
    </ScrollView>
  )
}

export default Dashboard