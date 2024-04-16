import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, Text, View, Dimensions, Alert, } from 'react-native';

import logo from '../assets/logo/logo.png'
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';

export default function App() {


  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // console.log(`Email - ${form.email} , Password - ${form.password}`)

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      router.replace('/dashboard');
      setSubmitting(false);
    }, 300);
  }

  return (
    <SafeAreaView
      style={{ backgroundColor: 'rgba(0, 14, 9, 1)' }}
      className="h-full "
    >
      <ScrollView>
        <View
          className="w-full flex justify-center items-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >

          <Image
            source={logo}
            resizeMode="contain"
            className="w-[90px] h-[90px]"
            alt='Greendzine logo'
          />


          <FormField
            title="Email"
            placeholder='E-mail'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            placeholder='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Login"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-primary"
            >
              Forgot Password?
            </Link>
          </View>
        </View>


      </ScrollView>
     
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

