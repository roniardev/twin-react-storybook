import tw, { styled, css, theme } from 'twin.macro'

const Button = styled.button(({ isPrimary, isSecondary, isSmall }) => [
  // The common button styles added with the tw import
  tw`text-lg px-8 py-2  focus:outline-none`,
  tw`transform transition-transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-white bg-pink-700)`,

  // Use props to conditionally style your components
  isPrimary && tw`bg-pink-500 text-white border-black`,

  // Combine regular css with tailwind classes within backticks
  isSecondary &&
    tw`bg-green-600 text-white border-black hocus:(scale-105 text-white bg-green-700)`,

  // Conditional props can be added
  isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `,
])

export default Button
