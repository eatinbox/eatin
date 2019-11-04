/* This Higher order component is used to render a list of seletable similar
 Components and returns the index of  of currently selected with just a select 
 of a function called renderComponents
 
 It receives the Component which will recieve the selected index props
 as first argument, then number of times the component needs to be rendered
 and the starting index of which component will be selected

 */
import React from 'react';

export default SelectHightlight = (WrappedComponent, optionArr, startIndex) => {

    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                selecState: this.createArray(startIndex),
                selectedIndex: startIndex,
            };
        }

        createArray = (startIndex) => {
            const arr = new Array(optionArr.length).fill(false)
            arr[startIndex] = true

            return arr
        }

        handlePress = (i) => {
            let arr = new Array(optionArr.length).fill(false)
            arr[i] = true

            this.setState({
                selecState: [...arr],
                selectedIndex: i,
            })
        }

        renderComponents = (Comp) => {
            /* This function will recieve the component to be rendered as a 
            prop so  this function also technically behaves as a hoc 
            This following arguments will be recieved by the Component,
            (selected, and a handlePresss function) which needs to be used inside
            the component for conditionally changing styles and providing the
            handlepress function to touchable opacity */

            return (
                <React.Fragment>
                    {this.state.selecState.map((state, i) => (
                        <Comp
                            key={i}
                            selected={state}
                            handlePress={this.handlePress}
                            index={i}
                            {...optionArr[i]}
                        />
                    ))}
                </React.Fragment>
            )
        }

        render() {
            return (
                <WrappedComponent
                    selected={this.state.selectedIndex}
                    renderComponents={this.renderComponents}
                    {...this.props}
                />
            )
        }
    }
}