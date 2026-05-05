// components/ProjectModal.tsx
import { useRef, useEffect } from 'react';
import { Project } from './project';

interface ProjectModalProps {
  project: Project; // Ideally, use your Project interface here
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalBackdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      ref={modalBackdropRef}
      onClick={(e) => e.target === modalBackdropRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
    >
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">{project.title}</h2>
            <p className="text-blue-600 font-mono text-sm uppercase mt-1">{project.role}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-3xl leading-none">&times;</button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section className="space-y-4 text-slate-700">
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p><strong className="text-slate-900">Summary:</strong> {project.summary}</p>
                <p><strong className="text-slate-900">Problem:</strong> {project.problem}</p>
                <p><strong className="text-slate-900">Solution:</strong> {project.solution}</p>
                <p><strong className="text-slate-900">Result:</strong> {project.results}</p>
              </div>
            </section>

            <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 italic">
              <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Elegant Solutions</h4>
              <p className="text-slate-700">{project.elegantSolutions}</p>
            </section>
            <section>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t: string) => (
                  <span key={t} className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs border border-slate-200">{t}</span>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                System Architecture
              </h4>
              <div className="rounded-lg overflow-hidden border border-slate-200 bg-white group relative">
                <a 
                  href={project.picture} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cursor-zoom-in"
                >
                  <img 
                    src={project.picture} 
                    alt="Architecture" 
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]" 
                  />
                  {/* Overlay indicator */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/90 px-3 py-1.5 rounded-full text-[10px] font-bold text-slate-600 shadow-sm border border-slate-200">
                      CLICK TO EXPAND
                    </span>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
