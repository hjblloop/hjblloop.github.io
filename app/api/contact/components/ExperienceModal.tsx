import { useEffect } from 'react';

interface ExperienceModalProps {
  job: any;
  onClose: () => void;
}

export default function ExperienceModal({ job, onClose }: ExperienceModalProps) {
    useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-8 shadow-2xl animate-in zoom-in duration-200 cursor-default "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{job.role}</h2>
            <p className="text-blue-600 font-mono text-sm uppercase">{job.company} // {job.period}</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-3xl">&times;</button>
        </div>

        <div className="space-y-8 overflow-y-auto max-h-[60vh] pr-2 custom-scrollbar">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
            Technical Problem Solving
          </h4>
          
          {job.breakdowns.map((item: any, idx: number) => (
            <section key={idx} className="group">
              <h5 className="font-bold text-slate-900 dark:text-white flex items-center">
                <span className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs mr-3">
                  0{idx + 1}
                </span>
                {item.title}
              </h5>
              <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed text-sm pl-9">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 pl-9">
                {item.tags.map((tag: string) => (
                  <span key={tag} className="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-500 uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
