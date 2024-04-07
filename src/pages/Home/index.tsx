import { Play } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidatorSchema = zod.object({
  task: zod.string().min(1),
  minutesAmount: zod.number().min(1).max(60),
})

type NewCyleFormData = zod.infer<typeof newCycleFormValidatorSchema>

interface Cycle {
  identifier: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [amountSecontsPassed, setAmountSecondsPassed] = useState(0)
  const [activeCycleIdentifier, setActiveCycleIdentifier] = useState<
    string | null
  >(null)

  const { register, handleSubmit, watch, reset } = useForm<NewCyleFormData>({
    resolver: zodResolver(newCycleFormValidatorSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCyleFormData) {
    const newCycle: Cycle = {
      identifier: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleIdentifier(newCycle.identifier)

    reset()
  }

  const activeCycle = cycles.find(
    (cycle) => cycle.identifier === activeCycleIdentifier,
  )

  const totalCycleSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentCycleSeconds = activeCycle
    ? totalCycleSeconds - amountSecontsPassed
    : 0

  const minutesCycleAmount = Math.floor(currentCycleSeconds / 60)
  const secondsCycleAmount = currentCycleSeconds % 60

  const minutesCycleAmountString = String(minutesCycleAmount).padStart(2, '0')
  const secondsCycleAmountString = String(secondsCycleAmount).padStart(2, '0')

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="task"
            list="task-suggestions"
            placeholder="De um nome para o projeto"
            {...register('task', { required: true })}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            {...register('minutesAmount', {
              valueAsNumber: true,
              required: true,
            })}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutesCycleAmountString[0]}</span>
          <span>{minutesCycleAmountString[1]}</span>
          <Separator>:</Separator>
          <span>{secondsCycleAmountString[0]}</span>
          <span>{secondsCycleAmountString[1]}</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Comecar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
