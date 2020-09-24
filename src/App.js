/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from 'twin.macro'
import Button from './Button'

const App = () => {
  return (
    <div css={[tw`flex flex-col items-center justify-center h-screen`]}>
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button isPrimary>Submit</Button>
        <Button isSecondary>Cancel</Button>
        <Button isSmall>Close</Button>
      </div>
    </div>
  )
}

export default App
