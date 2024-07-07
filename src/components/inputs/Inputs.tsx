import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';
import {colors} from '../../constant/Colors';

interface CustomTextInput extends TextInputProps {
  placeholder: string;
  keyBoardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const CustomTextInput: React.FC<CustomTextInput> = ({
  placeholder,
  keyBoardType,
  style,
  secureTextEntry = false,
  ...props
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={colors.placeholder}
      placeholder={placeholder}
      {...props}
      keyboardType={keyBoardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default CustomTextInput;
