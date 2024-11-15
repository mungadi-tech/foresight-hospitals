import { ApplicationForm } from '@/forms/apply'
import { Card, Container, Heading } from '@radix-ui/themes'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/apply/apply/start')({
  component: () => (
    <Container p={'2'}>
      <Card style={{ background: 'var(--accent-3)' }} mt={'6'}>
        <Heading ml={'4'} size={'8'} color="orange">
          Application Form
        </Heading>
      </Card>

      <ApplicationForm />
    </Container>
  ),
})
