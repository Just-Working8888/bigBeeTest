import { Select, ConfigProvider } from 'antd';
import React from 'react';
import colors from '../../scss/variables/colors.module.scss';
import { CaretDownFilled } from '@ant-design/icons';

const colorCases = {
  border: {
    disabled: 'transparent',
    notDisabled: colors.borderColor,
  },
  iconColor: {
    disabled: colors.divider,
    notDisabled: colors.secondary,
  }
};

export default function SelectComponent({ ...props }) {
  const disabledCase: 'disabled' | 'notDisabled' = props.disabled ? 'disabled' : 'notDisabled';

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
          colorBorder: colorCases.border[disabledCase],
        },
        components: {
          Select: {
            colorPrimaryHover: colors.secondary,
            optionSelectedBg: colors.primary50,
            optionSelectedColor: colors.white,
            controlOutlineWidth: 5,
            controlOutline: colors.primaryborder,
          },
        },
      }}
    >
      <Select
        {...props}
        listItemHeight={10}
        suffixIcon={
          <CaretDownFilled style={{color: colorCases.iconColor[disabledCase]}}/>
        }
      />
    </ConfigProvider>
  );
}
