import { Button, ButtonProps, ConfigProvider } from 'antd';
import React from 'react';
import colors from '../../scss/variables/colors.module.scss';
import classes from './ButtonComponent.module.scss';

const colorCases = {
  primary: {
    bg: {
      disabled: colors.borderColor,
      notDisabled: colors.primary50,
    },
    border: {
      disabled: colors.borderColor,
      notDisabled: colors.primaryborder,
    },
    text: {
      disabled: colors.white,
      notDisabled: colors.primarytext,
    },
  },

  default: {
    bg: {
      disabled: colors.lightgrayfill,
      notDisabled: colors.white,
    },
    border: {
      disabled: colors.borderColor,
      notDisabled: colors.primaryborder,
    },
    text: {
      disabled: colors.borderColor,
      notDisabled: colors.primarytext,
    },
  },
};

const ButtonComponent: React.FC<ButtonProps> = ({ type = 'default', ...props }) => {
  const disabledCase: 'disabled' | 'notDisabled' = props.disabled ? 'disabled' : 'notDisabled';
  const typeKey = type as keyof typeof colorCases;

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
          colorPrimaryActive: colors.primary100,
          colorBorder: colorCases[typeKey].border[disabledCase],
          colorText: colors.primarytext,
          colorBgContainerDisabled: colorCases[typeKey].bg[disabledCase],
          colorTextDisabled: colorCases[typeKey].text[disabledCase],
          colorFillContentHover: colors.primary100,
        },
      }}
    >
      <Button {...props} type={type} className={classes.button} />
    </ConfigProvider>
  );
};

export default ButtonComponent;
