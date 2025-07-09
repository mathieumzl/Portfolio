<template>
  <v-container>
    <v-container fluid pa-0 id="prestations">
      <h1 class="TitreH3 section-divider mt-4">Mentions Légales</h1>
      <i class="mb-5" style="color:#3E3E3E !important">
        Conformément aux dispositions de l'article 6 III-1 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, cette page présente les mentions légales du site MZL Home Design.
      </i>
      <div class="parent-container">
        <div class="info-section">
          <ul class="info-list">
          </ul>
          <ul class="info-list">
            <div class="section-title"><h3>1. Identification</h3></div>
            <li><strong>Nom de l'entreprise :</strong> <span>MZL Home Design</span></li>
            <li><strong>Forme juridique :</strong> <span>Entrepreneur individuel</span></li>
            <li><strong>SIRET :</strong> <span>91517514500043</span></li>
            <li><strong>Siège social :</strong> <span>Montpellier, France</span></li>
            <li><strong>Email de contact :</strong> <a href="mailto:mazal.mathieu@gmail.com">mazal.mathieu@gmail.com</a></li>
          </ul>
        </div>

        <div class="info-section">
          <ul class="info-list">
            <div class="section-title"><h3>2. Hébergement du site</h3></div>
            <li><strong>Hébergeur :</strong> <span>OVH</span></li>
            <li><strong>Siège social :</strong> <span>2 rue Kellermann, 59100 Roubaix, France</span></li>
            <li><strong>Site Web :</strong> <a href="https://www.ovh.com" target="_blank">www.ovh.com</a></li>
          </ul>
        </div>
      </div>

      <div class="parent-container">
        <div class="info-section">
          <div class="section-title"><h3>3. Propriété intellectuelle</h3></div>
          <p>Les créations réalisées par <strong>MZL Home Design</strong> (plans, rendus, visuels, etc.) sont la propriété exclusive de l'entreprise et sont protégées par le droit d'auteur. Toute utilisation à des fins commerciales ou modification est strictement interdite sans accord écrit préalable.</p>
          <p>Toute reproduction, modification ou diffusion, totale ou partielle, de ces éléments sans autorisation préalable écrite est interdite. L'utilisation est uniquement autorisée à des fins privées et non commerciales.</p>
          <p>Toute demande d'utilisation de contenu doit être adressée à : <a href="mailto:mazal.mathieu@gmail.com">mazal.mathieu@gmail.com</a></p>
        </div>

        <div class="info-section">
          <div class="section-title"><h3>4. Protection des données personnelles</h3></div>
          <p>Les informations collectées via le formulaire de contact sont destinées exclusivement à <strong>MZL Home Design</strong>, dans le but de répondre à vos demandes. Aucune donnée personnelle ne sera communiquée à des tiers sans votre consentement préalable.</p>
          <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 et au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition concernant vos données personnelles. Pour exercer ces droits, il vous suffit de nous contacter à l'adresse suivante : <a href="mailto:mazal.mathieu@gmail.com">mazal.mathieu@gmail.com</a></p>
          <p>Le site n’utilise aucun outil de suivi, tel que Google Analytics, ni de cookies destinés à collecter des données personnelles.</p>
          <p>Les informations recueillies par le biais des formulaires de contact sont exclusivement utilisées pour traiter vos demandes et sont stockées de manière sécurisée.</p>
        </div>

        <div class="info-section">
          <div class="section-title"><h3>5. Conditions Générales de Vente (CGV)</h3></div>
          <p>Les <strong>Conditions Générales de Vente (CGV)</strong> sont disponibles sur demande. Elles seront transmises par email ou seront jointes à toute facture ou devis émis par <strong>MZL Home Design</strong>.</p>
        </div>

        <div class="info-section">
          <div class="section-title"><h3>6. Responsabilités et garanties</h3></div>
          <ul class="info-list">
            <li><strong>Exactitude des informations :</strong> <span>Les informations présentées sur ce site sont fournies à titre indicatif et peuvent être modifiées sans préavis.</span></li>
            <li><strong>Limitations de responsabilité :</strong> <span>MZL Home Design ne saurait être tenu responsable des erreurs, omissions ou interruptions de service du site.</span></li>
            <li><strong>Conditions des prestations :</strong> <span>Toute prestation de design ou d'architecture intérieure est soumise à un devis et à des conditions contractuelles préalables.</span></li>
            <li><strong>Droits d'auteur :</strong> <span>Toute reproduction ou utilisation des visuels et réalisations présentés sans autorisation est interdite.</span></li>
            <li><strong>Disponibilité du site :</strong> <span>Aucune garantie n'est apportée quant à la disponibilité permanente du site, hébergé via GitHub Pages.</span></li>
          </ul>
        </div>

        <div class="info-section">
          <div class="section-title"><h3>7. Contact</h3></div>
          <p>Pour toute question relative aux mentions légales, vous pouvez contacter :  <a href="mailto:mazal.mathieu@gmail.com">mazal.mathieu@gmail.com</a></p>
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      hoverParticulier: false,
      hoverPro: false
    }
  }
})
</script>
<style scoped>
/* Titres secondaires */
.subtitle-text {
  color: #FFAA00; /* Orange clair pour différencier */
  font-size: 20px;
  font-weight: bold;
}
i.mb-5 {
  width: 100%;                  /* Fixe la largeur à 100% de l'élément parent */
  max-width: 700px !important;  /* Limite la largeur maximale à 600px (ou 100px selon ce que tu veux) */
  word-wrap: break-word !important;  /* Permet de couper les mots s'ils dépassent */
  white-space: normal !important;    /* Permet au texte de se diviser automatiquement sur plusieurs lignes */
  margin-bottom: 15px;          /* Espacement sous l'élément */
  text-align: center !important;    /* Centre le texte à l'intérieur */
  display: block !important;        /* Fait en sorte que le <i> se comporte comme un bloc pour la gestion de la largeur */
  margin-left: auto;              /* Centre horizontalement */
  margin-right: auto;             /* Centre horizontalement */
  padding: 0 10px;               /* Optionnel : ajoute du padding si besoin */
}
/* Texte principal */
p, li, span, strong {
  color: #3E3E3E !important; /* Blanc pour assurer une bonne lisibilité */
  letter-spacing: 0.5px !important;
}
strong  {
  letter-spacing: 1px !important;
}
p, li, span, strong  {
  font-size: clamp(15px, 1.2vw, 20px) !important; /* Ajuste la taille de la police à la valeur souhaitée */
}
/* Liens */
a {
  color: #3E3E3E !important; /* Bleu pour les liens */
  text-decoration: none !important;
}

a:hover {
  text-decoration: underline !important;
}

.info-list {
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important; /* Aligne verticalement à gauche */
  align-items: flex-start !important; /* Aligne à gauche */
  height: 100% !important; /* Ajuste selon le besoin */
  list-style: none !important; /* Enlève les puces */
  margin: 0 !important;
  padding: 0 !important; /* Enlève les marges */
}

.info-list li {
  margin-bottom: 8px !important; /* Espacement entre les lignes */
}

.info-section {
  width: 80% !important; /* Limite la largeur de chaque section */
  margin-bottom: 20px !important; /* Ajoute de l'espace entre les sections */
  text-align: left !important; /* Assure que tout est aligné à gauche dans chaque section */
}

.parent-container {
  display: flex !important;
  flex-direction: column !important; /* Empile les sections verticalement */
  align-items: center !important; /* Centre horizontalement */
  justify-content: flex-start !important; /* Aligne verticalement au début */
  padding-left: 10px !important; /* Ajoute un léger décalage à gauche */
  padding-right: 10px !important; /* Ajoute un léger décalage à droite */
  width: 100% !important; /* Prend toute la largeur de l'écran */
}
</style>
