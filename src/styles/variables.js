const variables = {
  displayFlex: (justify = 'center', align = 'center') => `
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
  `,

  FlexColCenter: (justifyContent = 'center', flexDirection = 'column') => `
    display: flex;
    justify-content: ${justifyContent};
    flex-direction: ${flexDirection};
  `,
};

export default variables;
