### Version 2.2.0 - June 26, 2016

- **Divider** - Descenders like "g" are cut off in `horizontal divider` [#3585](https://github.com/Semantic-Org/Semantic-UI/issues/3585)
- **Menu** - `@dividerSize` was not being used in `vertical menu` [#3781](https://github.com/Semantic-Org/Semantic-UI/issues/3781)

### Version 2.1.5 - Nov 1, 2015

- **Divider/Step/Modal/AD** - Fixes 1px jump at `@mobileBreakpoint` caused by incorrect edge conditions in media query [#3180](https://github.com/Semantic-Org/Semantic-UI/issues/3180) **Thanks @mdehoog**
- **Form** - Removed `divider` spacing as part of `ui form`, this caused inheritance issues when using special divider types [#3092](https://github.com/Semantic-Org/Semantic-UI/issues/3092)

#### Features

- **Divider** - Vertical divider can now be used multiple times in a single column row (not just 50/50 split). [#2808](https://github.com/Semantic-Org/Semantic-UI/issues/2808)

### Version 2.0.3 - July 8, 2015

- **Divider/Grid** - `vertical divider` no longer has inexplicable right border when stacked on mobile [#2558](https://github.com/Semantic-Org/Semantic-UI/issues/2558)

### Version 2.0.0 - June 30, 2015

- **Divider** - `vertical divider` inside `ui grid` now accounts for column padding
- **Divider**  - Hidden divider now correctly hides vertical dividers
- **Divider** - Fixes single icon alignment inside `vertical divider` or `horizontal divider`
- **Divider** - Fixed slight offset in `vertical divider` when it automatically adjusts to `horizontal divider` inside a `stackable grid`
- **Menu** - Fixes divider appears on last element of `(x) item menu`
- **Grid** - Vertically divided grids now double row spacing to account for dividers
- **Header/Table/Divider** - These components now pull border color defaults from `site.variables` instead of using their own values

### Version 1.8.0 - January 23, 2015

- **Button** - ``ui vertical basic buttons` now have dividers in default theme

### Version 1.5.0 - December 30, 2014

- **Grid** - Fix display of equal height stackable grid. Add padding to divided stackable grid for dividers

### Version 1.0.0 - November 24, 2014

- **Dropdown** - Many new content types now work inside dropdowns, headers, dividers, images, inputs, labels and more
- **Grid** - ``ui divider`` can now be used inside of row columns as well as ``vertically divided grid`` variation
- **Grid** - Vertically divided grid now does not include left/right gutters in divider

### Version 0.1.0 - Sep 25, 2013