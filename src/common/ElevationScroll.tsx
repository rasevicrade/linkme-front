import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

interface IProps {
	children: React.ReactElement;
}

export default function ElevationScroll(props: IProps) {
	const { children } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
}
