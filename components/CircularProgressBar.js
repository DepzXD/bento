import React, { useRef } from 'react';
import Svg, { Circle, G } from 'react-native-svg';
import { View, Animated, TextInput, StyleSheet } from 'react-native';
import { typographyStyles } from './styles/Typography';
import { darkScheme } from './styles/Colors';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const CircularProgressBar = ({
  percentage = 60,
  radius = 55,
  strokeWidth = 13,
  duration = 500,
  color = darkScheme.Secondary,
  strokeColor = darkScheme.PrimaryBackgound,
  delay = 0,
  textColor,
  max = 100,
  state,
}) => {
  const circleRef = useRef();
  const inputRef = useRef();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const halfCircle = radius + strokeWidth;
  const circleCircumfrance = 2 * Math.PI * radius;

  percentage = state === 'NaN' ? 100 : percentage;

  React.useEffect(() => {
    const animation = (toValue) => {
      return Animated.timing(animatedValue, {
        delay,
        toValue,
        duration,
        useNativeDriver: true,
      }).start();
    };

    animation(percentage);
    animatedValue.addListener((v) => {
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          value: `${Math.round(v.value)}`,
          text: `${Math.round(v.value)}`,
        });
      }

      if (circleRef?.current) {
        const maxPer = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumfrance - (circleCircumfrance * maxPer) / 100;
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [animatedValue, circleCircumfrance, delay, duration, max, percentage]);

  return (
    <View>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cy="50%"
            cx="50%"
            stroke={strokeColor}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <AnimatedCircle
            ref={circleRef}
            cy="50%"
            cx="50%"
            stroke={color}
            r={radius}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circleCircumfrance}
            strokeDashoffset={circleCircumfrance}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedInput
        useRef={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue={state === 'NaN' ? 'NaN' : `Kcal \n${percentage}`}
        multiline={true}
        style={[
          StyleSheet.absoluteFillObject,
          typographyStyles.text,
          typographyStyles.bold,
          { color: textColor ?? color, textAlign: 'center' },
        ]}
      />
    </View>
  );
};

export default CircularProgressBar;
