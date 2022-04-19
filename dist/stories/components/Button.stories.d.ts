/// <reference types="react" />
import Button from '../../components/index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../wirvi-styles.scss';
declare const _default: ComponentMeta<({ children, className, color, icon, isDisabled, isFullwidth, isInverted, isLight, isLoading, isOutlined, isResponsive, isRounded, isStatic, onClick, size, state, style, text, }: import("../../interfaces/button").IButton) => JSX.Element>;
export default _default;
export declare const Basic: ComponentStory<({ children, className, color, icon, isDisabled, isFullwidth, isInverted, isLight, isLoading, isOutlined, isResponsive, isRounded, isStatic, onClick, size, state, style, text, }: import("../../interfaces/button").IButton) => JSX.Element>;
export declare const TextChildren: ComponentStory<typeof Button>;
export declare const WithIcon: ComponentStory<({ children, className, color, icon, isDisabled, isFullwidth, isInverted, isLight, isLoading, isOutlined, isResponsive, isRounded, isStatic, onClick, size, state, style, text, }: import("../../interfaces/button").IButton) => JSX.Element>;
export declare const OnlyIcon: ComponentStory<({ children, className, color, icon, isDisabled, isFullwidth, isInverted, isLight, isLoading, isOutlined, isResponsive, isRounded, isStatic, onClick, size, state, style, text, }: import("../../interfaces/button").IButton) => JSX.Element>;
export declare const WithChildren: ComponentStory<typeof Button>;
export declare const WithLoading: ComponentStory<({ children, className, color, icon, isDisabled, isFullwidth, isInverted, isLight, isLoading, isOutlined, isResponsive, isRounded, isStatic, onClick, size, state, style, text, }: import("../../interfaces/button").IButton) => JSX.Element>;
