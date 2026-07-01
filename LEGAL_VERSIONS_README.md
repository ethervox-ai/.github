# Legal Document Version Control System

## Overview

This repository contains versioned legal documents (Terms of Service, Privacy Policy) for the EthervoxAI Android app. When these documents are updated, the Android app must notify users and request re-consent (GDPR requirement).

## Files

- **privacy.html** - Privacy Policy (Current: v2.0)
- **terms.html** - Terms of Service (Current: v1.1)
- **versions.json** - Machine-readable version manifest (for future remote version checking)

## Version Control Format

Each legal document has a version control comment at the top:

```html
<!-- 
    DOCUMENT VERSION CONTROL (Developer Info - Not Visible on Page)
    =================================================================
    Document: Privacy Policy
    Version: 2.0
    Last Updated: April 27, 2026
    Status: CURRENT
    
    Version History:
    - v2.0 (April 27, 2026): Added Children's Privacy section
    - v1.0 (Initial): Original privacy policy
-->
```

This comment:
- ✅ Is **not visible** on the rendered webpage
- ✅ Is **visible** in the HTML source (for devs)
- ✅ Tracks version history
- ✅ Provides update instructions

## How to Update Legal Documents

### Step-by-Step Process

1. **Update the Document Content**
   - Edit `privacy.html` or `terms.html`
   - Make your changes to the content
   - Update the "Last Updated" date in the document body

2. **Update Version Control Comment**
   - Increment the version number in the HTML comment
   - Add entry to "Version History" section
   - Update "Last Updated" date in comment

3. **Update versions.json**
   - Open `versions.json`
   - Update the version number for the document
   - Update the date
   - Add a brief summary of changes

4. **Update Android App**
   - Open Android project
   - Edit `app/src/main/java/com/droid/ethervox/FeatureManager.kt`
   - Update `LegalDocumentVersions.PRIVACY_VERSION` or `TERMS_VERSION`
   - Example:
     ```kotlin
     object LegalDocumentVersions {
         const val TERMS_VERSION = "1.2"  // <-- Update this
         const val PRIVACY_VERSION = "2.0"
         // ...
     }
     ```

5. **Commit and Deploy**
   - Commit changes to this repository
   - Push to deploy website updates
   - Build and release new Android app version

### Example: Updating Privacy Policy

```bash
# 1. Edit privacy.html
# - Change: Version: 2.0 → Version: 2.1
# - Add to history: "v2.1 (May 3, 2026): Added cookie policy"
# - Update Last Updated date in body

# 2. Update versions.json
# "privacy_policy": {
#   "version": "2.1",
#   "date": "2026-05-03",
#   "summary": "Added cookie policy section"
# }

# 3. Update Android app
# In FeatureManager.kt:
# const val PRIVACY_VERSION = "2.1"

# 4. Commit and push
git add privacy.html versions.json
git commit -m "docs(privacy): update privacy policy to v2.1 - add cookie policy"
git push

# 5. Release Android app with updated version constant
```

## What Happens in the App

When a user launches the app:
1. App reads hardcoded `LegalDocumentVersions.PRIVACY_VERSION` (e.g., "2.1")
2. App checks what version user previously accepted (e.g., "2.0")
3. If different: Show update dialog requiring re-consent
4. If same: Continue normally

## Version Numbering Scheme

Use semantic versioning for legal documents:

- **Major version** (x.0): Significant changes requiring re-consent
  - Example: v1.0 → v2.0 (major policy change)
  
- **Minor version** (x.x): Minor clarifications or additions
  - Example: v2.0 → v2.1 (added new section)
  
- **Always trigger re-consent**: Any version change requires re-consent per GDPR

## Future Enhancement: Remote Version Checking

The `versions.json` file is ready for future implementation of remote version checking:

1. Host `versions.json` on CDN or website
2. App fetches file daily
3. App compares remote version with user's accepted version
4. Show update dialog if different

**Benefit**: Notify users of document updates without requiring app update

**Current Status**: Not implemented yet (using hardcoded versions)

## Legal Compliance

This system ensures compliance with:
- ✅ **GDPR Article 7(3)**: "Notify users of changes to processing purposes"
- ✅ **Google Play Policies**: "Provide updated privacy policy to users"
- ✅ **CCPA**: "Notice of privacy policy changes"

## Questions?

Contact the development team or see:
- Android implementation: `/app/src/main/java/com/droid/ethervox/FeatureManager.kt`
- Full plan: `ethervoxai-android/docs/FIRST_BOOT_CONSENT_PLAN.md`
