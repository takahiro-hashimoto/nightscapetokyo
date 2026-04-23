import HomeAuthorCard from '@/components/common/HomeAuthorCard'
import { getComponentLabels } from '@/lib/i18n-labels'

type Props = {
  locale?: string
}

export default function HomeAuthor({ locale }: Props) {
  const aboutHref = locale ? `/${locale}/about/` : '/about/'
  const labels = getComponentLabels(locale ?? 'ja')
  return (
    <section className="home-section" id="about">
      <div className="home-container">
        <HomeAuthorCard
          heading={labels.homeAuthor.heading}
          aboutHref={aboutHref}
          locale={locale ?? 'ja'}
        />
      </div>
    </section>
  )
}
