/*
1. Turn parent container to CSS Grid by display: grid;

--------------
2. Making columns. 
grid-template-columns: column1_width column2_width ... columnN_width; 
P.S: use relative measurements!
  (em, rem, fr, %);

---------------

3. Making rows.
grid-template-rows: row1_height row2_height ... rowN_height;

---------------

4. Short notation
grid-template: row row / col col;

---------------

5. Repeat
grid-template-columns/rows: 
repeat(number_of cols/rows, wid/heig);

grid-template-rows: repeat(2, 1fr 2fr) will create 4 rows with two with height of 1fr and two width height of 2fr.

---------------

minmax(min_value, max_value).

this function helps to create flexible size for column/row

exmpl:
grid-template-column: 1fr minmax(100px, 500px) 1fr;

---------------

Gaps. 
grid-column/row-gap: 10px;

Short notation:
grid-gap: row_gap col_gap;

---------------

Multiple row-items.
Inside the grid items it defines to properties:
grid-row-start and grid-row-end;

***
Short: grid-row: start / end
***

Notice that second value is the number of row it will take to but not include;

***
Multicolumn items.

The same thing but grid-column-start/end.

***
*Short: grid-column: start / end;
***
/|\
About span.
Span is used when you know how long column should be.

EXTRA SHORT: 
grid-area: row_start / column_start / row_end / column_end;

---------------

grid-template-areas
"Aliases" grid-area.
For example, grid contains 2 columns and two rows and 6 child div's in there and they have their own property grid-area with name which describes alias for this block.


---------------

z-index actually works here good in overlapping situations.;

---------------

justify-items justifys items inside their columns
Values: 
    auto
    normal
    start
    end
    center
    stretch
    baseline
    first baseline
    last baseline


---------------

justify-content justifys items inside grid-container

Values: 

    normal
    start
    end
    center
    stretch
    space-around
    space-between
    space-evenly
    baseline
    first baseline
    last baseline


---------------

align-items aligns items inside the columns.

values: 
    auto
    normal
    start - к верху строки
    end - к низу строки 
    center
    stretch
    baseline
    first baseline
    last baseline


---------------

align-content aligns all block not inside the row but inside grid container

values: 

    normal
    start
    end
    center
    stretch
    space-around
    space-between
    space-evenly
    baseline
    first baseline
    last baseline


---------------

justify-self and align-self --- item alone by axis x and y.

---------------

Implicit grid
grid-auto-rows and grid-auto-columns
Accepts one size parametr which tells to make column or row with this size.
(px, em, rem, fr, %)

---------------

grid-auto-flow defines what will be created -- rows or columns

values:

    row — specifies the new elements should fill rows from left to right and create new rows when there are too many elements (default)
    column — specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements
    dense — this keyword invokes an algorithm that attempts to fill holes earlier in the grid layout if smaller elements are added


---------------
*/