import HomeAuthorCard from '@/components/common/HomeAuthorCard'

type Props = {
  locale?: string
}

export default function HomeAuthor({ locale }: Props) {
  const aboutHref = locale ? `/${locale}/about/` : '/about/'
  return (
    <section className="home-section" id="about">
      <div className="home-container">
        <HomeAuthorCard heading="東京夜景ナビについて" aboutHref={aboutHref} />
      </div>
    </section>
  )
}
