import '../All.css'
import PageHero from '../templates/PageHero'
import SpecBar from '../templates/SpecBar'
import ContentSection from '../templates/ContentSection'
import ImageGrid from '../templates/ImageGrid'
import ProjectNav from '../templates/ProjectNav'
import { asset } from '../lib/asset'

export default function ProjectTwo() {
    return (
        <>
            <PageHero
                title="Project Two Title"
                summary="A one-sentence summary of the project that expands on the homepage card description."
            />

            <SpecBar
                tools={["Tool D", "Tool E"]}
                skills={["Skill C", "Skill D"]}
            />

            <div className="page-body">
                <ContentSection
                    heading="Project Overview"
                    body="Describe the project, the problem, and the outcome here."
                    image={{ src: asset("/project-two/detail-1.svg") }}
                />

                <ImageGrid
                    heading="Gallery"
                    images={[
                        { src: asset("/project-two/detail-1.svg"), caption: "Swap in real images — this grid supports up to four across." },
                        { src: asset("/project-two/cover.svg"), caption: "Second image caption." },
                    ]}
                />

                {/*
                  To embed a PDF report like the original example did, drop a
                  .pdf file into /public/project-two/ and use this pattern:

                  <div className="pdf-viewer">
                      <iframe src="/project-two/report.pdf" title="Project Two Report" />
                      <a className="pdf-open-link" href="/project-two/report.pdf" target="_blank" rel="noreferrer">
                          Open report in new tab ↗
                      </a>
                  </div>
                */}
            </div>

            <ProjectNav
                prev={{ title: "Project One Title", path: "/project-one" }}
            />
        </>
    )
}
