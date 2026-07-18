import './Logo.css';

/**
 * « Le Circuit » : le F tracé comme une piste de circuit imprimé, terminé par
 * un nœud de données plein. Signature retenue par Florian le 17/07/2026.
 *
 * Les deux tracés portent `pathLength={1}` : n'importe quelle timeline peut
 * les dessiner avec un simple `strokeDashoffset` de 1 → 0 (préloader, rideau).
 * Le nœud porte sa propre classe pour l'apparition en « pop ».
 *
 * `tone` :
 *   — default : tracé dans la couleur du texte, nœud bleu royal (bichromie) ;
 *   — inverse : tout blanc, pour les surfaces bleu royal ou marine.
 */
export function Logo({
  size = 28,
  tone = 'default',
  className = '',
}: {
  /** Côté du carré, en pixels. */
  size?: number;
  tone?: 'default' | 'inverse';
  className?: string;
}) {
  return (
    <svg
      className={`logo logo--${tone} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Florian Bouchart"
    >
      <path className="logo-trace" d="M15 42 V15 Q15 9 21 9 H37" pathLength={1} />
      <path className="logo-trace" d="M15 27 H30" pathLength={1} />
      <circle className="logo-node" cx="37" cy="27" r="3.75" />
    </svg>
  );
}
