
import React from 'react';
import Header from '../../views/resourceHub/Header.jsx';
import FilterControls from '../../views/resourceHub/FilterControls.jsx';
import ResourceCard from '../../views/resourceHub/ResourceCard.jsx';
import Pagination from '../../views/resourceHub/Pagination.jsx';

const resourceData = [
  { id: 1, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3C8m2WytG7p0jwDlf_CdWb4e7JWm4CTKOn7HPMpAlWuE3vAmDi7QF_AiVww_6PUcL4l9hgrjHWdX9Ns_yZNSX9ZGLPIscdnoVhsEhjfex90WANeLDGF_PBGCoBfzmKNx308tq15fSY8x9b4FLXq3DXhn-EQQyPO3j8TU51qXQRHXse_l__-BB6auDoEMFbmIsaJqzMK98FjMSeTDmPTaR2pyOPnoCmj-sEP52VhqtlwNgGnOpn8VMWmUYLxP8AezHVrZilo1NXQ', altText: 'Understanding Stress', title: 'Understanding Stress', details: 'Video • 12 min', icon: 'play_arrow', iconIsVisible: true },
  { id: 2, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGfsRw97uOVrFe5SGnt5RkSQUA1xHcMZZ9T7f_uRWB39AuimIla8kNpy5AWx8nCOcyXp9Zh5fOD3C3iJHCIWFnMcknETGs49pBhF8PZRIAZV5XVdfz0uBKDKGNdbZUqzei4qRRrzLfwC6Eqz7tZt2A1_m2RPXFD9ttbo5eACJDWUZLWYTvt3Y54KaBNfUiYET3i_V_G-Zx4RFtIdQu5RZjxa6nCRsUjLfOINorJmayK5tUYl_3HeYDuYkT3F5vSnPDnihqZr1x5A', altText: 'Mindfulness Meditation', title: 'Mindfulness Meditation', details: 'Audio • 20 min', icon: 'graphic_eq', iconIsVisible: true },
  { id: 3, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACugmloFA8nAk8R41Q8KCKnTk6_fZCk1ZC3l5nRNzmjzK75_9G3i44rOQfZtGunjTyeahFlYx46mu4dpu_niR6eF8-04GfsrULFUSUHx_pzSNu_XWbhoZTSmO9Y4iy6BLRZ3nKghligBinOapugfcIwKwyvC5gSqNrsAfWbPRd1GuFyfgY_JR6j3ugVHGC5X3mrICb9vpIXQXsGCAVWfeGHXVTup5skGGMXEJVu7gIvlq27FctLbo2z3Ne-p1V5FjQq-b_FAB0HA', altText: 'Coping with Anxiety', title: 'Coping with Anxiety', details: 'Article • 8 min read', icon: 'article', iconIsVisible: false },
  { id: 4, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDxDmaGwzuqQ26tEsnYgbncxH8V1i5XrFm6cAB1UfmOlZx1OyXhpo8JH5CHOlGEzmgEY-BgTNCHxKpCXVJh91deTQem-F8GM6T5HT2w1BZQR199HEZgmSry-UM7e6wI1mh0Hymjq33XipdJzXxX2383S3mk7Sl6KkSfCOQJEplIZTg0za_TxiPKQayzUFuH-4XB0WG9gvGofkCWurUU_asGYa_bnJr4OByU_Rah3xwsYkKR9ee4ZCNl3smHQgJkcnf0nLHkIM8sA', altText: 'Building Resilience', title: 'Building Resilience', details: 'Article • 10 min read', icon: 'article', iconIsVisible: false },
  { id: 5, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1KCAy5HtA9mAHwlHY9U8P5ZR-uQmRtcCYyXIJWo8srHjLD2cjGFPOJygBD5LBqfQ8hYOWABGhNfI0mw2dkIhZ1hZ-5ZgwZsAxRDxBvdQxFbMa0na81XtC0vTcBfirwoQwggTSH5MbwCp-dMPWoFo8ZZzulUbMtKGWNxZnZL2OYbbR0tg0D1QyPPu9a4VyAwZneGy_hRcBAIbtel1lIb4f0VrjWT4cNyD_C7s5x4psr3KV4VkQTLPH1mj_7V1ZwxK48sp0hr1l7Q', altText: 'Sleep Hygiene', title: 'Sleep Hygiene', details: 'Video • 15 min', icon: 'play_arrow', iconIsVisible: true },
  { id: 6, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAymafWknIiXQNtlM_hhV9kg5ynC67RLui8rBIgL_mkmJc96EKMrJ8CT-eMAwp9BuRMXx6_GsVvA3nkR42V9zRpbBkEGTWc5kKRnjM2egbxDmKP9f5QYnV8vUfs3jq2REe3bFK1k5tGWFSpkFVRFDAwlK3ABHW_Ylr4_NymFo_q8bEqMnzr5PFvQIAERLPAkYlXrvitW8H_OG--gdob5jPOEN2qQYQSE8yhzSuWXO6VsyhoMDPSimIKwWPu7Xp-oNxzvfLo0EWStg', altText: 'Time Management', title: 'Time Management', details: 'Article • 7 min read', icon: 'article', iconIsVisible: false },
  { id: 7, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx2mR1k1s-g0_j9G9J9l8l3_K8n5k2z4m1nN-f-h_z3c8-a_y6wR_v0m_uB9a3d4C_o_F-j_G9l0-wP8_T9m5v6N-b_C7-o_P-j_H8', altText: 'Positive Affirmations', title: 'Positive Affirmations', details: 'Audio • 10 min', icon: 'graphic_eq', iconIsVisible: true },
  { id: 8, imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8e8j9_K9p9X9v-l8h8c7g7f6-E5D4c3b2-A_b_A_c_D_E_F_g_H_I_j_K_L_M_n_O_p_Q_R_S_T_u_V_w_X_y_Z_a_B_c_D_e_F', altText: 'The Imposter Syndrome', title: 'The Imposter Syndrome', details: 'Video • 18 min', icon: 'play_arrow', iconIsVisible: true },
];

function ResourceHub() {
  return (
    <div className="bg-[#FCF8F8]" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Header />
          <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 flex flex-1 justify-center py-6 sm:py-8 lg:py-12">
            <div className="layout-content-container flex flex-col max-w-6xl flex-1">
              <div className="flex flex-col items-center text-center gap-3 sm:gap-4 p-2 sm:p-4">
                <h1 className="text-stone-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
                  Psychoeducational Resource Hub
                </h1>
                <p className="text-stone-600 text-sm sm:text-base lg:text-lg font-normal leading-normal max-w-3xl px-4">
                  Explore a variety of resources designed to support your mental well-being. Filter by language and resource type to find what suits you best.
                </p>
              </div>
              <FilterControls />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-4 mt-4 sm:mt-6 lg:mt-8">
                {resourceData.map(resource => (
                  <ResourceCard
                    key={resource.id}
                    imageUrl={resource.imageUrl}
                    altText={resource.altText}
                    title={resource.title}
                    details={resource.details}
                    icon={resource.icon}
                    iconIsVisible={resource.iconIsVisible}
                  />
                ))}
              </div>
              <Pagination />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ResourceHub;