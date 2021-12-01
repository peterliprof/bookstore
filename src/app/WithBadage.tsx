import React from "react";
import { StyleSheet, View } from "react-native";
import { Badge } from 'react-native-paper';


interface withBadgeOptions {
    top: number;
    right: number;
    left: number;
    bottom: number;
    hidden: boolean;
}


const withBadge = (value: number, options: withBadgeOptions) => (WrappedComponent: any) =>
    class extends React.Component {
        render() {
            const { hidden } = options;
            const badgeStyle = (({ top, right, left, bottom }) => ({ top, right, left, bottom }))(options);
            return (
                <View>
                    <WrappedComponent {...this.props} />
                    {!hidden && (
                        <Badge style={[styles.badge, badgeStyle, styles.badgeContainer, styles.badgeText]} >
                            {value}
                        </Badge>
                    )
                    }
                </View >
            );
        }
    };

export default withBadge;

const styles = StyleSheet.create({
    badge: {
        borderRadius: 9,
        height: 18,
        minWidth: 0,
        width: 18
    },
    badgeContainer: {
        position: "absolute"
    },
    badgeText: {
        fontSize: 10,
        paddingHorizontal: 0

    }
});