import clsx from 'clsx'

const offices = [
  {
    name: 'Baltimore',
    address: ['999 Lorem Ipsum Street', 'City State Postal Code'],
  },
]

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      {offices.map((office) => (
        <li key={office.name}>
          <address
            className={clsx(
              'text-sm not-italic',
              invert ? 'text-neutral-300' : 'text-neutral-600',
            )}
          >
            <strong className={invert ? 'text-white' : 'text-neutral-950'}>
              {office.name}
            </strong>
            <br />
            {office.address.map((line, index) => (
              <span key={index}>
                {line}
                {index < office.address.length - 1 && <br />}
              </span>
            ))}
          </address>
        </li>
      ))}
    </ul>
  )
}
