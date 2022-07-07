import { fireEvent, render, screen } from '@testing-library/react';
import { add } from 'nodemon/lib/rules';
import BoxList from './BoxList';

function addBox(boxList, side="100", color="lightseagreen") {
    const sideInput = boxList.getByLabelText("Enter a Side Length");
    const colorInput = boxList.getByLabelText("Choose a Color");
    fireEvent.change(colorInput, { target: {value: color}});
    fireEvent.change(sideInput, { target: {value: side}});
    const button = boxList.getByText("Create Box");
    fireEvent.click(button);
}

// smoke test
it('renders without crashing', () => {
  render(<BoxList />);
})

// snapshot test
it('matches snapshot', () => {
  const {asFragment} = render(<BoxList/>);
  expect(asFragment()).toMatchSnapshot();
})

// more tests
it("can add a new box", () => {
    const boxList = render(<BoxList/>)

    // no boxes yet
    expect(boxList.queryByText("X")).not.toBeInTheDocument()

    addBox(boxList);

    // expect to see the box
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
        backgroundColor: color,
        height: 100px,
        width: 100px
    `)

    // expect form to be empty
    expect(boxList.getAllByDisplayValue("")).toHaveLength(1);
    expect(boxList.getAllByDisplayValue("#000000")).toHaveLength(1);
})

it("can remove a box", () => {
    const boxList = render(<BoxList/>)
    addBox(boxList);

    const removeButton = boxList.getByText("X");

    // expect to see the box
    expect(removeButton).toBeInTheDocument();

    // delete box
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
})