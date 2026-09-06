import React from 'react';
import { Code2, ExternalLink, Github, Bookmark } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ArchitecturalDrawing, PresentationSlidesGraphic, MinimalistShelfPhoto } from './ProjectIllustrations';

export const Projects: React.FC = () => {
  const renderIllustration = (type: 'architectural' | 'slides' | 'shelf') => {
    switch (type) {
      case 'architectural':
        return <ArchitecturalDrawing />;
      case 'slides':
        return <PresentationSlidesGraphic />;
      case 'shelf':
        return <MinimalistShelfPhoto />;
      default:
        return <ArchitecturalDrawing />;
    }
  };

  const getPrimaryIcon = (linkText: string) => {
    if (linkText.toLowerCase().includes('source') || linkText.toLowerCase().includes('code')) {
      return <Code2 className="w-3.5 h-3.5" />;
    }
    if (linkText.toLowerCase().includes('github')) {
      return <Github className="w-3.5 h-3.5" />;
    }
    return <Bookmark className="w-3.5 h-3.5" />;
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-[#e8e6df]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs font-mono tracking-widest text-[#7a776f] uppercase block mb-1">
            SELECTED PROJECTS
          </span>
          <span className="text-[11px] font-mono text-[#9e9b92]">
            ({FEATURED_PROJECTS.length} Featured)
          </span>
        </div>

        {/* Project Cards Sequence */}
        <div className="space-y-24 sm:space-y-32">
          {FEATURED_PROJECTS.map((project) => (
            <article key={project.id} className="flex flex-col items-center text-center">
              {/* Top Visual Graphic Container */}
              <div className="w-full mb-8 sm:mb-10 shadow-xs">
                {renderIllustration(project.imageType)}
              </div>

              {/* Project Meta & Category */}
              <div className="mb-2">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#8a877e] uppercase">
                  {project.tag}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl sm:text-4xl font-serif text-[#1c1b18] mb-4 tracking-tight">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-sm sm:text-base text-[#5c5952] max-w-2xl leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-0.5 rounded-full bg-[#f2f1eb] border border-[#dcd9ce] text-xs font-mono text-[#4a4843]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-6 text-xs font-mono">
                <a
                  href={project.primaryLinkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#1c1b18] hover:text-[#5c5952] underline underline-offset-4 decoration-[#b8b5aa] transition-colors"
                >
                  {getPrimaryIcon(project.primaryLinkText)}
                  <span>{project.primaryLinkText}</span>
                </a>

                {project.secondaryLinkText && project.secondaryLinkUrl && (
                  <a
                    href={project.secondaryLinkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#1c1b18] hover:text-[#5c5952] underline underline-offset-4 decoration-[#b8b5aa] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{project.secondaryLinkText}</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
